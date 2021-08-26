using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using DoNgoaiChinhHang.Areas.Admin.Models;
using PagedList;
using DoNgoaiChinhHang.Areas.Admin.Helper;

namespace DoNgoaiChinhHang.Areas.Admin.Controllers
{
    [FilterAdmin]
    public class ProductsController : Controller
    {
        private DBContext db = new DBContext();

        public ActionResult Index(int? page, string sortOrder, string searchString, string currentFilter)
        {
            ViewBag.CurrentSort = sortOrder;
            ViewBag.SapTheoTen = String.IsNullOrEmpty(sortOrder) ? "ten_desc" : "";
            ViewBag.SapTheoGia = String.IsNullOrEmpty(sortOrder) ? "gia_desc" : "gia";
            if (searchString != null)
            {
                page = 1;
            }
            else
            {
                searchString = currentFilter;
            }
            ViewBag.CurrentFilter = searchString;
            var list = db.Products.Include(p => p.Category);
            if (!String.IsNullOrEmpty(searchString))
            {
                list = list.Where(s => s.ProductName.Contains(searchString) || s.Price.ToString().Contains(searchString));
            }
            switch (sortOrder)
            {
                case "ten_desc":
                    list = list.OrderByDescending(s => s.ProductName);
                    break;
                case "gia_desc":
                    list = list.OrderByDescending(s => s.Price);
                    break;
                case "gia":
                    list = list.OrderBy(s => s.Price);
                    break;
                default:
                    list = list.OrderBy(s => s.ProductName);
                    break;
            }
            int pageSize = 2;
            int pageNumber = (page ?? 1);
            return View(list.ToPagedList(pageNumber, pageSize));
            
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
                if (ModelState.IsValid)
                {
                    var files = Request.Files;
                    if (!Directory.Exists(Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID)))
                    {
                        Directory.CreateDirectory(Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID));
                    }
                    if(files.Count>=1 && files[0].FileName != "")
                    {
                       
                            for (int i = 0; i < files.Count; i++)
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
                    else
                    {
                        ViewBag.ImageError = "Bạn chưa chọn ảnh mô tả sản phẩm!!!!";
                        return Create();
                    }
                }
                else
                {
                    ViewBag.ImageError = "Bạn chưa chọn ảnh mô tả sản phẩm!!!!";
                    return Create();
                }
            }
            catch
            {
                ViewBag.Err = "Thêm mới thất bại";
                
                return RedirectToAction("Create");
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
                              .Select(fn => id+"/"+ Path.GetFileName(fn));
            //var files = Directory.GetFiles(DirectoryImage_id);
            //files.
            ViewBag.images = files;

            ViewBag.CategoryID = new SelectList(db.Categories, "CategoryID", "CategoryName", product.CategoryID);
            return View(product);
        }
      


        [HttpPost]
        public void Delete_productImage(string filePath)
        {
            string[] nameimage = filePath.Split('/');
            string filename = nameimage[nameimage.Length-1] + ".jpg";
            var folder = Server.MapPath("~/wwwroot/ProductsImages/"+nameimage[nameimage.Length-2]+"/"+filename);
            System.IO.File.Delete(folder);
           
        }




        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ProductID,CategoryID,ProductName,Image,Evaluation,Brand,Orgin,Price,Benefit,Introduction,Element,Tutorial,Discount,Freeship,Description")] Product product)
        {
          
            if (ModelState.IsValid)
            {
                var files = Request.Files;
                if (!Directory.Exists(Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID)))
                {
                    Directory.CreateDirectory(Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID));
                }
                if (files.Count > 0)
                {
                    for (int i = 0; i < files.Count; i++)
                    {
                        if (files[i] != null)
                        {
                            var InputFilename = Path.GetFileName(files[i].FileName);
                            if (InputFilename != "")
                            {
                                var ServerSavePath = Path.Combine(Server.MapPath("~/wwwroot/ProductsImages/" + product.ProductID.Trim() + "/") + InputFilename);
                                files[i].SaveAs(ServerSavePath);
                            }
                            

                        }
                        else
                        {
                            ViewBag.Err = "k vào để lưu ảnh";
                        }
                    }
                }




                product.Image = "~/wwwroot/ProductsImages/" + product.ProductID;
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
                    foreach(String file in Directory.GetFiles(Server.MapPath("~/wwwroot/ProductsImages/" + id)))
                    {
                        System.IO.File.Delete(file);
                    }
                    Directory.Delete(Server.MapPath("~/wwwroot/ProductsImages/" + id));
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
