using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DoNgoaiChinhHang.Areas.Admin.Helper;
using DoNgoaiChinhHang.Areas.Admin.Models;
using PagedList;

namespace DoNgoaiChinhHang.Areas.Admin.Controllers
{
    [FilterAdmin]
    public class OrdersController : Controller
    {
        private DBContext db = new DBContext();

        public ActionResult Index(int? page, string sortOrder, string searchString, string currentFilter)
        {
            ViewBag.CurrentSort = sortOrder;
            ViewBag.SapTheoTen = String.IsNullOrEmpty(sortOrder) ? "ten_desc" : "";
            if (searchString != null)
            {
                page = 1;
            }
            else
            {
                searchString = currentFilter;
            }
            ViewBag.CurrentFilter = searchString;
            var list = db.Orders.Include(c => c.Account);
            if (!String.IsNullOrEmpty(searchString))
            {
                /*list = list.Where(s => s.OrderDetails.ToList().Where(f => f.Product.ProductName.ToString).Contains(searchString));*/
            }
            switch (sortOrder)
            {
                case "ten_desc":
                    list = list.OrderByDescending(s => s.Sum);
                    break;
                default:
                    list = list.OrderBy(s => s.Sum);
                    break;
            }
            int pageSize = 2;
            int pageNumber = (page ?? 1);
            return View(list.ToPagedList(pageNumber, pageSize));
        }

        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Order order = db.Orders.Find(id);
            if (order == null)
            {
                return HttpNotFound();
            }
            return View(order);
        }

        [HttpPost]
        public ActionResult Edit(string id)
        {
            bool result = false;
            var u = db.Orders.Where(x => x.OrderID == id).FirstOrDefault();
            if (u != null)
            {
                u.Status = true;
                db.Entry(u).State = EntityState.Modified;
                db.SaveChanges();
                result = true;
            }

            return Json(result, JsonRequestBehavior.AllowGet);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
