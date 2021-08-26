using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DoNgoaiChinhHang.Areas.Admin.Helper;
using DoNgoaiChinhHang.Areas.Admin.Models;
using PagedList;
using QRCoder;

namespace DoNgoaiChinhHang.Areas.Admin.Controllers
{
    [FilterAdmin]
    public class OrdersController : Controller
    {
        private DBContext db = new DBContext();

        public ActionResult Index(int? page, string sortOrder, string searchString, string currentFilter)
        {
            ViewBag.CurrentSort = sortOrder;
            ViewBag.SapTheoTen = String.IsNullOrEmpty(sortOrder) ? "ten_desc" : "";
            ViewBag.SapTheoNgay = String.IsNullOrEmpty(sortOrder) ? "ngaydat_desc" : "ngaydat";
            ViewBag.SapTheoGia = String.IsNullOrEmpty(sortOrder) ? "tongtien_desc" : "tongtien";
            ViewBag.SapTheoTrangThai = String.IsNullOrEmpty(sortOrder) ? "trangthai_desc" : "trangthai";
            if (searchString != null)
            {
                page = 1;
            }
            else
            {
                searchString = currentFilter;
            }
            ViewBag.CurrentFilter = searchString;
            var list = db.Orders.Include(c => c.Account);
            if (!String.IsNullOrEmpty(searchString))
            {
                list = list.Where(s => s.Account.CustomerName.Contains(searchString) || s.Account.Phone.Contains(searchString));
            }
            switch (sortOrder)
            {
                case "ten_desc":
                    list = list.OrderByDescending(s => s.Account.CustomerName);
                    break;
                case "ngaydat_desc":
                    list = list.OrderByDescending(s => s.DateOrder);
                    break;
                case "tongtien_desc":
                    list = list.OrderByDescending(s => s.Sum);
                    break;
                case "trangthai_desc":
                    list = list.OrderByDescending(s => s.Status);
                    break;
                case "ngaydat":
                    list = list.OrderBy(s => s.DateOrder);
                    break;
                case "tongtien":
                    list = list.OrderBy(s => s.Sum);
                    break;
                case "trangthai":
                    list = list.OrderBy(s => s.Status);
                    break;
                default:
                    list = list.OrderBy(s => s.Sum);
                    break;
            }
            int pageSize = 2;
            int pageNumber = (page ?? 1);
            return View(list.ToPagedList(pageNumber, pageSize));
        }
        private static Byte[] BitmapToBytes(Bitmap img)
        {
            using (MemoryStream stream = new MemoryStream())
            {
                img.Save(stream, System.Drawing.Imaging.ImageFormat.Png);
                return stream.ToArray();
            }
        }
        public Byte[] QRCodeGenerate(String qrText)
        {
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(qrText, QRCodeGenerator.ECCLevel.Q);
            QRCode qrCode = new QRCode(qrCodeData);
            Bitmap qrCodeImage = qrCode.GetGraphic(20);
            return BitmapToBytes(qrCodeImage);
        }
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Order order = db.Orders.Find(id);
            if (order == null)
            {
                return HttpNotFound();
            }
            String context = "Mã số hóa đơn:" + order.OrderID + "\n Ngày Order:" + order.DateOrder.ToString() + "\nKhách hàng:" + order.Account.CustomerName + "\nTổng số tiền thanh toán là:" + order.Sum + "₫";
            ViewBag.QRcode = QRCodeGenerate(context);
            return View(order);
        }

        [HttpPost]
        public ActionResult Edit(string id)
        {
            bool result = false;
            var u = db.Orders.Where(x => x.OrderID == id).FirstOrDefault();
            if (u != null)
            {
                u.Status = true;
                db.Entry(u).State = EntityState.Modified;
                db.SaveChanges();
                result = true;
            }

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
