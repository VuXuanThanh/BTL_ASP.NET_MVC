using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DoNgoaiChinhHang.Areas.Admin.Models;
using PagedList;

namespace DoNgoaiChinhHang.Controllers
{
    public class CategoriesController : Controller
    {
        private DBContext db = new DBContext();
        
        // GET: Categories
        public ActionResult GetProductByCategory(string categoryId, int? page)
        {
            /*ViewBag.listCategoryBase = db.CategoryBases.ToList();*/
            ViewBag.listCategoryBase = db.CategoryBases.ToList();

            ViewBag.listBrand = db.Products.Select(p => p.Brand).Distinct().ToList();
            ViewBag.listOrgin = db.Products.Select(p => p.Orgin).Distinct().ToList();
            ViewBag.listProduct = db.Products.Select(p => p).ToList();

            var category = db.Categories.Where(s => s.CategoryID == categoryId).FirstOrDefault();
            ViewBag.category = category;
            ViewBag.categoryBase = category.CategoryBase;
            var productCategory = db.Products.Where(x => x.CategoryID == category.CategoryID).ToList();
            int pageSize = 9;
            if (page == null) page = 1;
            int pageNumber = (page ?? 1);
            return View(productCategory.ToPagedList(pageNumber, pageSize));
        }
    }
}