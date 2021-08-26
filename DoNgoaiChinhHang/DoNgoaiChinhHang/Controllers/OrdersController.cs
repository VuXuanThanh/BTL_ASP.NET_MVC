using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DoNgoaiChinhHang.Areas.Admin.Models;
using DoNgoaiChinhHang.Models;

namespace DoNgoaiChinhHang.Controllers
{
    public class OrdersController : Controller
    {
        private DBContext db = new DBContext();
        public ActionResult OrderUsers()
        {
          
            return View();
        }

        [HttpPost]
        public ActionResult OrderUsers(string PaymentType, string Note)
        {
            if (Session["IDUrSS"] == null)
            {
                return RedirectToAction("LoginUser", "Account");
            }
            if (Session["cart"] == null)
            {
                return RedirectToAction("Index", "Home");
            }
            var cart = Session["cart"];
            var list = (List<CartItem>)cart;
            float sum = 0;
            foreach (var item in list)
            {
                sum += item.Product.Price * item.Quanlity;
            }
            var OrderID = CreateKey("H");
            var AccountID = Int32.Parse(Session["IDUrSS"].ToString());
            bool PaymentTypeCredits = bool.Parse(PaymentType);
            if (Note == null)
            {
                Note = "false";
            }
            bool NoteOrder = bool.Parse(Note);
            DateTime DateOrder = DateTime.Now;

            Order order = new Order()
            {
                OrderID = OrderID,
                AccountID = AccountID,
                Note = NoteOrder,
                DateOrder=DateOrder,
                PaymentType = PaymentTypeCredits,
                Sum=sum,
                Status=false,
                Discount=0
            };

            db.Orders.Add(order);
            db.SaveChanges();

            List<OrderDetail> listOrderDetails = new List<OrderDetail>();
            foreach (var item in list)
            {
                OrderDetail itemOD = new OrderDetail()
                {
                    OrderID = OrderID,
                    ProductID = item.Product.ProductID,
                    Quantity = item.Quanlity,
                    Price = item.Product.Price,
                };
                listOrderDetails.Add(itemOD);
            }
            db.OrderDetails.AddRange(listOrderDetails);
            db.SaveChanges();


            ViewBag.order = order;
            ViewBag.sum = sum;
            var listDetailProducts = db.OrderDetails.Include(p => p.Product).Where(x => x.OrderID == OrderID);
            HttpContext.Session["cart"] = null;
            return View(listDetailProducts);

        }
        public static string CreateKey(string tiento)
        {
            string key = tiento;
            string[] partsDay;
            partsDay = DateTime.Now.ToShortDateString().Split('/');
            //Ví dụ 07/08/2009
            string d = String.Format("{0}{1}{2}", partsDay[0], partsDay[1], partsDay[2].Remove(0, 2));
            key = key + d;
            string[] partsTime;
            partsTime = DateTime.Now.ToLongTimeString().Split(':');
            //Ví dụ 7:08:03 PM hoặc 7:08:03 AM
            if (partsTime[2].Substring(3, 2) == "PM")
                partsTime[0] = ConvertTimeTo24(partsTime[0]);
            if (partsTime[2].Substring(3, 2) == "AM")
                if (partsTime[0].Length == 1)
                    partsTime[0] = "0" + partsTime[0];
            //Xóa ký tự trắng và PM hoặc AM
            partsTime[2] = partsTime[2].Remove(2, 3);
            string t;
            t = String.Format("{0}{1}{2}", partsTime[0], partsTime[1], partsTime[2]);
            key = key + t;
            return key;
        }
        public static string ConvertTimeTo24(string hour)
        {
            string h = "";
            switch (hour)
            {
                case "1":
                    h = "13";
                    break;
                case "2":
                    h = "14";
                    break;
                case "3":
                    h = "15";
                    break;
                case "4":
                    h = "16";
                    break;
                case "5":
                    h = "17";
                    break;
                case "6":
                    h = "18";
                    break;
                case "7":
                    h = "19";
                    break;
                case "8":
                    h = "20";
                    break;
                case "9":
                    h = "21";
                    break;
                case "10":
                    h = "22";
                    break;
                case "11":
                    h = "23";
                    break;
                case "12":
                    h = "0";
                    break;
            }
            return h;
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
