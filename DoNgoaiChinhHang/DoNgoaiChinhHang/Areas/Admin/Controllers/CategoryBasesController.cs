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
using PagedList.Mvc;

namespace DoNgoaiChinhHang.Areas.Admin.Controllers
{
    [FilterAdmin]
    public class CategoryBasesController : Controller
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
            var list = db.CategoryBases.Select(s => s);

            if (!String.IsNullOrEmpty(searchString))
            {
                list = list.Where(s => s.CategoryBaseName.Contains(searchString));
            }
            switch (sortOrder)
            {
                case "ten_desc":
                    list = list.OrderByDescending(s => s.CategoryBaseName);
                    break;
                default:
                    list = list.OrderBy(s => s.CategoryBaseName);
                    break;
            }
            int pageSize = 3;
            int pageNumber = (page ?? 1);

            return View(list.ToPagedList(pageNumber, pageSize));
        }


        public JsonResult Create2(CategoryBase abc)
        {
            bool result = false;
            var u = db.CategoryBases.Where(x => x.CategoryBaseID == abc.CategoryBaseID).FirstOrDefault();
            if (u != null)
            {
                result = false;
            }
            else
            {
                db.CategoryBases.Add(abc);
                db.SaveChanges();
                result = true;
            }
            return Json(result, JsonRequestBehavior.AllowGet);

        }

        public JsonResult Edit2(CategoryBase abc)
        {
            bool result = false;
            db.Entry(abc).State = EntityState.Modified;
            db.SaveChanges();
            result = true;
            return Json(result, JsonRequestBehavior.AllowGet);

        }
        public ActionResult Create()
        {
            return View();
        }



        public JsonResult Delete(List<string> ids)
        {
            List<string> result = new List<string>();

            foreach(string id in ids){
                var u = db.CategoryBases.Where(x => x.CategoryBaseID == id).FirstOrDefault();
                if (u != null)
                {
                    var categoryChilds = db.Categories.Where(p => p.CategoryBaseID == id).ToList();
                    if (categoryChilds.Count > 0)
                    {
                        result.Add(id);
                    }
                    else
                    {
                        db.CategoryBases.Remove(u);
                        
                    }
                }
            }
            db.SaveChanges();

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategoryBase categoryBase = db.CategoryBases.Find(id);
            if (categoryBase == null)
            {
                return HttpNotFound();
            }
            return View(categoryBase);
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
