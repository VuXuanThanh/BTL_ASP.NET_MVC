using DoNgoaiChinhHang.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DoNgoaiChinhHang.Controllers
{
    public class AccountController : Controller
    {
        private DBContext db = new DBContext();
        public const string LoginSession = "account";

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
            var account = db.Accounts.FirstOrDefault(s => s.Email == acc.Email || s.Phone==acc.Phone);
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
                    return RedirectToAction("LoginUser","Account");
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
                        Session[LoginSession] = acc;
                        return RedirectToAction("Index","Home");
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
        public JsonResult Show()
        {
            var usr = (Account)Session[LoginSession];
            return Json(usr, JsonRequestBehavior.DenyGet);
        }
        #endregion
    }
}