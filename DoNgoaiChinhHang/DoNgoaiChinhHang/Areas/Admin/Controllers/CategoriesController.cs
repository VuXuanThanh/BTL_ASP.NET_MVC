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
    public class CategoriesController : Controller
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
            var list = db.Categories.Include(c => c.CategoryBase);
            if (!String.IsNullOrEmpty(searchString))
            {
                list = list.Where(s => s.CategoryName.Contains(searchString) || s.CategoryBase.CategoryBaseName.Contains(searchString));
            }
            switch (sortOrder)
            {
                case "ten_desc":
                    list = list.OrderByDescending(s => s.CategoryName);
                    break;
                default:
                    list = list.OrderBy(s => s.CategoryName);
                    break;
            }
            int pageSize = 2;
            int pageNumber = (page ?? 1);
            return View(list.ToPagedList(pageNumber, pageSize));
        }

        public JsonResult Create2(Category abc)
        {
            bool result = false;
            var u = db.Categories.Where(x => x.CategoryID == abc.CategoryID).FirstOrDefault();
            if (u != null)
            {
                result = false;
            }
            else
            {
                db.Categories.Add(abc);
                db.SaveChanges();
                result = true;
            }
            return Json(result, JsonRequestBehavior.AllowGet);

        }

        public ActionResult Create()
        {
            ViewBag.CategoryBaseID = new SelectList(db.CategoryBases, "CategoryBaseID", "CategoryBaseName");
            return View();
        }
        public JsonResult Delete(List<string> ids)
        {
            List<string> result = new List<string>();
            foreach(string id in ids)
            {
                var u = db.Categories.Where(x => x.CategoryID == id).FirstOrDefault();
                if (u != null)
                {
                    var productChilds = db.Products.Where(p => p.CategoryID == id).ToList();
                    if (productChilds.Count > 0)
                    {
                        result.Add(id);
                    }
                    else
                    {
                        db.Categories.Remove(u);
                    }
                }
            }
            db.SaveChanges();

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Edit2(Category abc)
        {
            bool result = false;
            db.Entry(abc).State = EntityState.Modified;
            db.SaveChanges();
            result = true;
            return Json(result, JsonRequestBehavior.AllowGet);

        }

        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return HttpNotFound();
            }
            ViewBag.CategoryBaseID = new SelectList(db.CategoryBases, "CategoryBaseID", "CategoryBaseName", category.CategoryBaseID);
            return View(category);
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
