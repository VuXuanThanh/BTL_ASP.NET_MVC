using DoNgoaiChinhHang.Areas.Admin.Models;
using DoNgoaiChinhHang.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace DoNgoaiChinhHang.Controllers
{
    [Serializable]
    public class CartController : Controller
    {
        DBContext db = new DBContext();
        public const string CartSession = "cart";
        // GET: CartItem    
        public ActionResult Index()
        {
            var cart = Session[CartSession];
            var list = new List<CartItem>();
            
            float sum = 0;
            if (cart != null)
            {
                list = (List<CartItem>)cart;
            }
            foreach (var item in list)
            {
                sum += (float) item.Product.Price * item.Quanlity;
            }
            ViewBag.Sum = sum;
            /*            return Json(list, JsonRequestBehavior.AllowGet);
            */
            return View(list);
        }

        public ActionResult AddItem(string productID, int quanlity, int datHangNgay)
        {
            var cart = Session[CartSession];
            var product = db.Products.Where(x => x.ProductID == productID).FirstOrDefault();
           
            
           
            if (cart != null)
            {
                var list = (List<CartItem>)cart;
                if (list.Exists(x => x.Product.ProductID == productID))
                {

                    foreach (var item in list)
                    {
                        if (item.Product.ProductID == productID)
                        {
                            item.Quanlity += quanlity;
                        }
                    }
                }
                else
                {
                    var item = new CartItem();
                    item.Product = product;
                    item.Quanlity = quanlity;
                    list.Add(item);
                }
                Session[CartSession] = list;
            }
            else
            {
                var item = new CartItem()
                {
                    Product = product,
                    Quanlity = quanlity
                };
                var list = new List<CartItem>();
                list.Add(item);
                Session[CartSession] = list;
            }
            var list2 = (List<CartItem>)Session[CartSession];
            /*return Json(true,JsonRequestBehavior.AllowGet);*/
            var files = Directory.EnumerateFiles(Server.MapPath(product.Image))
                .Select(fn => product.ProductID.Trim() + "/" + Path.GetFileName(fn));
            string ImgPath = files.First();
            ViewBag.ImageCart = ImgPath;
            if(datHangNgay == 1)
            {
                return RedirectToAction("Index");
            }
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        public JsonResult Show()
        {
            var list = (List<CartItem>)Session[CartSession];

            List<CartItem> list2 = new List<CartItem>();
            if (Session[CartSession] != null)
            {

                var one = new CartItem()
                {
                    Quanlity = 1,
                    Product = new Product()
                    {
                        CategoryID = "00"
                    }
                };
                foreach (var item in list)
                {


                    one = new CartItem()
                    {
                        Quanlity = item.Quanlity,
                        Product = new Product()
                        {
                            ProductID = item.Product.ProductID.Trim(),
                            CategoryID = item.Product.CategoryID.Trim(),
                            ProductName = item.Product.ProductName.Trim(),
                            Image = item.Product.Image,
                            Price = item.Product.Price,
                            Freeship = item.Product.Freeship
                        }
                    };
                    list2.Add(one);
                }
            }
            return Json(list2, JsonRequestBehavior.AllowGet);
        }

        public JsonResult RemoveItem(string productID)
        {
            var listItemCart = (List<CartItem>)Session[CartSession];
            var item = listItemCart.RemoveAll(x => x.Product.ProductID == productID);
            Session[CartSession] = listItemCart;
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult UpdateItem(string productID, int quanlity)
        {

            var cart = Session[CartSession];
            var listItemCart = (List<CartItem>)cart;
            foreach (var item in listItemCart)
            {
                var cartItem = listItemCart.SingleOrDefault(m => m.Product.ProductID == productID);
                if (cartItem != null)
                {
                    cartItem.Quanlity = quanlity;
                }
            }
            Session[CartSession] = listItemCart;
            return new HttpStatusCodeResult(System.Net.HttpStatusCode.OK);
        }
    }
}