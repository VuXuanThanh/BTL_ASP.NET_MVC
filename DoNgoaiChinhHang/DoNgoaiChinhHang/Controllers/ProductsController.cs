using DoNgoaiChinhHang.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;

namespace DoNgoaiChinhHang.Controllers
{
    public class ProductsController : Controller
    {
        private DBContext db = new DBContext();
        // GET: Products
        [HttpGet]
        public ActionResult Detail(string productID)
        {
            //if (productID == null)
            //{
            //    productID = "1111";
            //}
            var product = db.Products.Where(p => p.ProductID == productID).FirstOrDefault();
            var category = db.Categories.Where(c => c.CategoryID == product.CategoryID).FirstOrDefault();
            var categoryBase = db.CategoryBases.Where(c => c.CategoryBaseID == category.CategoryBaseID).FirstOrDefault();
            var listRelatedProducts = db.Products.Where(p => p.Brand == product.Brand).Take(4);
            var listTopProducts = db.Products.Where(p => p.Brand == product.Brand).Take(5);
            var DirectoryImage_id = Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID.Trim());
            var Images = Directory.EnumerateFiles(DirectoryImage_id)
                              .Select(fn => product.ProductID.Trim() + "/" + Path.GetFileName(fn));
            //var Images = Directory.GetFiles(Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID.Trim()));
            ViewBag.Images = Images.ToList();
            
            ViewBag.categoryName = category;
            ViewBag.categoryBaseName = categoryBase;
            ViewBag.listRelatedProducts = listRelatedProducts.Where(p => p.ProductID != productID);
            ViewBag.listTopProducts = listTopProducts.Where(p => p.ProductID != productID);

            return View(product);
        }
    }
}