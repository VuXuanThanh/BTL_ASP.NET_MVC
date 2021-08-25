using DoNgoaiChinhHang.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace DoNgoaiChinhHang.Controllers
{
    public class AccountController : Controller
    {
        private DBContext db = new DBContext();
        public const string NameSession = "UrNameSS";
        public const string AddressSession = "AddrSS";
        public const string PhoneSession = "PhoneSS";
        public const string IDAccSession = "IDUrSS";

        #region Account register and login for users
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Register(Account acc)
        {
            var account = db.Accounts.FirstOrDefault(s => s.Email == acc.Email || s.Phone == acc.Phone);
            if (ModelState.IsValid)
            {

                if (account == null)
                {
                    acc.Password = BCrypt.Net.BCrypt.HashPassword(acc.Password);
                    db.Configuration.ValidateOnSaveEnabled = false;
                    acc.IsAdmin = false;
                    acc.Status = true;
                    db.Accounts.Add(acc);
                    db.SaveChanges();
                    return RedirectToAction("LoginUser", "Account");
                }
                else
                {
                    ViewBag.error = "Tài khoản đã tồn tại, vui lòng xem lại !!!";
                    return View();
                }
            }
            return View();

        }
        public ActionResult LoginUser()
        {

            return View();
        }
        [HttpPost]
        public ActionResult LoginUser(string Email, string Password)
        {
            if (ModelState.IsValid)
            {
                var acc = db.Accounts.SingleOrDefault(x => x.Email == Email);
                if (acc != null)
                {
                    bool verified = BCrypt.Net.BCrypt.Verify(Password, acc.Password.Trim());
                    if (verified)
                    {
                        Session[NameSession] = acc.CustomerName;
                        Session[AddressSession] = acc.Address;
                        Session[PhoneSession] = acc.Phone;
                        Session[IDAccSession] = acc.AccountID;
                        return RedirectToAction("Index", "Home");
                    }
                    else
                    {
                        ViewBag.error = "Mật khẩu không chính xác!!!!";
                        return View();
                    }
                }
                else
                {
                    ViewBag.error = "Email không tồn tại!!!";
                    return View();
                }
            }
            return View();
        }
        public JsonResult GetInforIntoOrder()
        {
            var indentity = Session[IDAccSession];
            if (indentity != null)
            {
                var usr = new
                {
                    Name = Session[NameSession].ToString(),
                    Phone = Session[PhoneSession].ToString(),
                    Address = Session[AddressSession].ToString()
                };
                return Json(usr, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(false, JsonRequestBehavior.DenyGet);
            }
        }
        public ActionResult Logout()
        {
            Session[IDAccSession] = null;
            Session[NameSession] = null;
            Session[PhoneSession] = null;
            Session[AddressSession] = null;
            return RedirectToAction("LoginUser", "Account");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);

        }
        #endregion
    }
}