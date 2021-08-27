using DoNgoaiChinhHang.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using DoNgoaiChinhHang.Models;

namespace DoNgoaiChinhHang.Controllers
{
    public class ProductsController : Controller
    {
        private DBContext db = new DBContext();
        // GET: Products
        [HttpGet]
        public ActionResult Detail(string productID)
        {

            var product = db.Products.Where(p => p.ProductID == productID).FirstOrDefault();
            var category = db.Categories.Where(c => c.CategoryID == product.CategoryID).FirstOrDefault();
            var categoryBase = db.CategoryBases.Where(c => c.CategoryBaseID == category.CategoryBaseID).FirstOrDefault();

            var listRelatedProducts = db.Products.Where(p => p.Brand == product.Brand && p.ProductID != productID).Take(4);
            var listTopProducts = db.Products.OrderByDescending(p => p.Price).Take(5);

            ViewBag.Images = ImagePath(product);

            ViewBag.categoryName = category;
            ViewBag.categoryBaseName = categoryBase;

            var listRP = new List<ImgProduct>();
            foreach (var item in listRelatedProducts)
            {
                var img = ImagePath(item).FirstOrDefault();
                var t = new ImgProduct(item, img);
                listRP.Add(t);
            }

            var listTP = new List<ImgProduct>();
            foreach (var item in listTopProducts)
            {
                var img = ImagePath(item).FirstOrDefault();
                var t = new ImgProduct(item, img);
                listTP.Add(t);
            }


            ViewBag.listRelatedProducts = listRP;
            ViewBag.listTopProducts = listTP;

            return View(product);
        }

        public List<string> ImagePath(Product product)
        {
            var DirectoryImage_id = Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID.Trim());
            var Images = Directory.EnumerateFiles(DirectoryImage_id)
                              .Select(fn => product.ProductID.Trim() + "/" + Path.GetFileName(fn)).ToList();

            return Images;
        }
    }
}