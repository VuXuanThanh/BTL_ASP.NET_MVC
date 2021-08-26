using DoNgoaiChinhHang.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PagedList;

namespace DoNgoaiChinhHang.Controllers
{
    public class CategoryBasesController : Controller
    {
        // GET: CategoryBases
        private DBContext db = new DBContext();
        public ActionResult GetProductsByCategoryBase(string categoryBaseId, int? page)
        {
            ViewBag.categoryBase = db.CategoryBases.Where(s => s.CategoryBaseID == categoryBaseId).FirstOrDefault();
            ViewBag.listCategoryBase = db.CategoryBases.ToList();

            ViewBag.listBrand = db.Products.Select(p => p.Brand).Distinct().ToList();
            ViewBag.listOrgin = db.Products.Select(p => p.Orgin).Distinct().ToList();
            ViewBag.listProduct = db.Products.Select(p => p).ToList();

            var category = db.Categories.Where(s => s.CategoryBaseID == categoryBaseId).FirstOrDefault();
            if (category == null)
            {
                return View();
            }
            var productCategory = db.Products.Where(x => x.CategoryID == category.CategoryID).ToList();
            int pageSize = 9;
            if (page == null) page = 1;
            int pageNumber = (page ?? 1);
            return View(productCategory.ToPagedList(pageNumber, pageSize));
        }

    }
}