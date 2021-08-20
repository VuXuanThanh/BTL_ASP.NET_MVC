using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DoNgoaiChinhHang.Areas.Admin.Models;
using PagedList;

namespace DoNgoaiChinhHang.Areas.Admin.Controllers
{
    public class ProductsController : Controller
    {
        private DBContext db = new DBContext();

        public ActionResult Index(int? page)
        {
            var products = db.Products.Include(p => p.Category);
            products = products.OrderBy(s => s.ProductID);
            int pageSize = 2;
            int pageNumber = (page ?? 1);
            return View(products.ToPagedList(pageNumber, pageSize));
        }



        public ActionResult Create()
        {
            ViewBag.CategoryID = new SelectList(db.Categories, "CategoryID", "CategoryName");
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ProductID,CategoryID,ProductName,Image,Evaluation,Brand,Orgin,Price,Benefit,Introduction,Element,Tutorial,Discount,Freeship,Description")] Product product)
        {

            try
            {
                var files = Request.Files;
                if (!Directory.Exists(Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID)))
                {
                    Directory.CreateDirectory(Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID));
                }
                for(int i = 0; i< files.Count; i++)
                {
                    if (files[i] != null)
                    {
                        var InputFilename = Path.GetFileName(files[i].FileName);
                        var ServerSavePath = Path.Combine(Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID + "/") + InputFilename);
                        files[i].SaveAs(ServerSavePath);

                    }
                    else
                    {
                        ViewBag.Err = "k vào để lưu ảnh";
                    }
                }
                product.Image = "~/wwwroot/ProductsImages/" + product.ProductID;
                db.Products.Add(product);
                db.SaveChanges();
            }
            catch
            {
                ViewBag.Err = "Thêm mới thất bại";
            }
                
            return RedirectToAction("Create");
        }






        //GET :port/Admin/Product/Edit/1
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            var DirectoryImage_id = Server.MapPath("~/wwwroot/ProductsImages/"+id);
            var files = Directory.EnumerateFiles(DirectoryImage_id)
                              .Select(fn => "~/wwwroot/ProductsImages/"+id+"/" + Path.GetFileName(fn));
            ViewBag.images = files;

            ViewBag.CategoryID = new SelectList(db.Categories, "CategoryID", "CategoryName", product.CategoryID);
            return View(product);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ProductID,CategoryID,ProductName,Image,Evaluation,Brand,Orgin,Price,Benefit,Introduction,Element,Tutorial,Discount,Freeship,Description")] Product product)
        {
            if (ModelState.IsValid)
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CategoryID = new SelectList(db.Categories, "CategoryID", "CategoryName", product.CategoryID);
            return View(product);
        }

        public JsonResult Delete(List<string> ids)
        {
            List<string> result = new List<string>();

            foreach (string id in ids)
            {
                var u = db.Products.Where(x => x.ProductID == id).FirstOrDefault();
                if (u != null)
                {
                    var categoryChilds = db.OrderDetails.Where(p => p.ProductID == id).ToList();
                    if (categoryChilds.Count > 0)
                    {
                        result.Add(id);
                    }
                    else
                    {
                        db.Products.Remove(u);

                    }
                }
            }
            db.SaveChanges();
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
