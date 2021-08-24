using DoNgoaiChinhHang.Areas.Admin.Chart;
using DoNgoaiChinhHang.Areas.Admin.Helper;
using DoNgoaiChinhHang.Areas.Admin.Models;
using Newtonsoft.Json;
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
        public ActionResult Index(int? nam)
        {
            var pros = db.Products.Select(s => s).ToList();
            ViewBag.CountPro = pros.Count;
            var orders = db.Orders.Select(s => s).ToList();
            ViewBag.CountOd = orders.Count;
            var users = db.Accounts.Select(s => s.IsAdmin != true).ToList();
            ViewBag.CountUs = users.Count;
            long doanhThu = 0;
            orders.ForEach((i) =>
            {
                doanhThu += long.Parse(i.Sum + "");
            });
            ViewBag.doanhThu = doanhThu;

            //Thong ke

            string selectY = Request["nam"]?.ToString();
            int yy = selectY == null ? 2021 : int.Parse(selectY);
            ViewBag.nam = yy;
            List<DataPoint> dataPoints = new List<DataPoint>();
            for (int i=1; i<=12; i++)
            {
                long dt = 0;
                var list_order = (from a in db.Orders
                                  where (a.DateOrder.Value.Month == i && a.DateOrder.Value.Year == yy
                                  && a.Status == true)
                                  select a).ToList();
                foreach (var item in list_order)
                {
                    dt += (long)item.Sum;
                }

                dataPoints.Add(new DataPoint("Tháng " + i, dt));

                /*DateTime datet = DateTime.Parse("2020-10-" + i);
                dataPoints.Add(new DataPoint(datet.Millisecond, dt));*/
            }
            
            ViewBag.DataPoints = JsonConvert.SerializeObject(dataPoints);
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