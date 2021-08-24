using DoNgoaiChinhHang.Areas.Admin.Helper;
using DoNgoaiChinhHang.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DoNgoaiChinhHang.Areas.Admin.Controllers
{
    public class HomeController : Controller
    {
        DBContext db = new DBContext();
        [MyFilter]
        public ActionResult Index()
        {
            var pros = db.Products.Select(s => s).ToList();
            ViewBag.CountPro = pros.Count;

            var orders = db.Orders.Select(s => s).ToList();
            ViewBag.CountOd = orders.Count;
            long doanhThu = 0;

            orders.ForEach((i) =>
            {
                doanhThu += long.Parse(i.Sum + "");
            });


            ViewBag.doanhThu = doanhThu;



            return View();
        }

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }


        public JsonResult Login(Account account)
        {
            Account acc = null;
            acc =
            (Account)(from a in db.Accounts
                      where (a.Email.Equals(account.Email) &&
                      a.Password.Equals(account.Password) && a.IsAdmin == true && a.Status == true)
                      select a).FirstOrDefault();
            if (acc != null)
            {
                Session["CustomerName"] = acc.CustomerName;
                Session["Email"] = acc.Email;
                var url = Session["url-redirect"];
                if (url != null)
                {
                    Session.Remove("url-redirect");
                    return Json(url.ToString(), JsonRequestBehavior.AllowGet);
                }

                return Json("null", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
        public ActionResult Logout()
        {
            Session.Clear();
            return RedirectToAction("Login");
        }
    }
}