using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DoNgoaiChinhHang.Areas.Admin.Models;
using PagedList;

namespace DoNgoaiChinhHang.Areas.Admin.Controllers
{
    public class CategoriesController : Controller
    {
        private DBContext db = new DBContext();

        public ActionResult Index(int? page)

        {
            var categories = db.Categories.Include(c => c.CategoryBase);
            categories = categories.OrderBy(s => s.CategoryID);
            int pageSize = 2;
            int pageNumber = (page ?? 1);
            return View(categories.ToPagedList(pageNumber, pageSize));
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
        public JsonResult Delete(string id)
        {
            bool result = false;
            var u = db.Categories.Where(x => x.CategoryID == id).FirstOrDefault();

            if (u != null)
            {
                var productChilds = db.Products.Where(p => p.CategoryID == id).ToList();
                if (productChilds.Count > 0)
                {
                    result = false;
                }
                else
                {
                    db.Categories.Remove(u);
                    db.SaveChanges();
                    result = true;
                }
            }
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
