using DoNgoaiChinhHang.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PagedList;
using System.Data;
using System.Data.Entity;
using System.Net;
using System.Text.RegularExpressions;
using System.Text;

namespace DoNgoaiChinhHang.Controllers
{
    public class SearchController : Controller
    {
        private DBContext db = new DBContext();
        // GET: Search
        public ActionResult Search_Results(string content, int? page)
        {
            ViewBag.listCategoryBase = db.CategoryBases.ToList();
            var listProduct = db.Products.Select(P => P);
            var products = listProduct.ToList();


            ViewBag.listBrand = db.Products.Select(p => p.Brand).Distinct().ToList();
            ViewBag.listOrgin = db.Products.Select(p => p.Orgin).Distinct().ToList();
            ViewBag.listProduct = listProduct.ToList();

            //Kiem tra ND tim kiem co phai theo xuat xu hoac hang sx k
            if (content == null || content == "")
            {
                content = "Tim-Kiem";
            }
            bool test = false;
            if (content.Contains("Thương hiệu") || content.Contains("Chính hãng"))
            {
                var list = content.Split(' ');
                var td = list[0] + " " + list[1];
                var nd = "";
                test = true;
                for (int i = 2; i < list.Length; i++)
                {
                    nd += list[i] + " ";
                }

                ViewBag.SearchContent = content;

                if (td.Contains("Thương hiệu"))
                {
                    listProduct = listProduct.Where(p => p.Brand.Contains(nd.Trim()));
                }
                else
                {
                    listProduct = listProduct.Where(p => p.Orgin.Contains(nd.Trim()));
                }

                products = new List<Product>();
                products = listProduct.ToList();
            }
            else
            {
                test = false;

                var c = ConvertToUnSign(content);

                products = new List<Product>();
                products.AddRange(listProduct.Where(p => p.Price.ToString().Contains(c)));

                products.AddRange(listProduct.Where(delegate (Product p)
                {
                    if (ConvertToUnSign(p.ProductName).IndexOf(c, StringComparison.CurrentCultureIgnoreCase) >= 0)
                        return true;
                    else
                        return false;
                }).AsQueryable().ToList());

                products.AddRange(listProduct.Where(delegate (Product p)
                {
                    if (ConvertToUnSign(p.Brand).IndexOf(c, StringComparison.CurrentCultureIgnoreCase) >= 0)
                        return true;
                    else
                        return false;
                }).AsQueryable().ToList());

                products.AddRange(listProduct.Where(delegate (Product p)
                {
                    if (ConvertToUnSign(p.Orgin).IndexOf(c, StringComparison.CurrentCultureIgnoreCase) >= 0)
                        return true;
                    else
                        return false;
                }).AsQueryable().ToList());
            }

            ViewBag.soLuong = products.Distinct().Count();
            ViewBag.SearchContent = content;
            ViewBag.test = test;

            //cần sắp xếp trước khi phân trang
            var listProducts = products.Distinct().OrderBy(s => s.ProductID);

            int pageSize = 3; //kích thước trang 
            int pageNumber = (page ?? 1);//Nếu page bằng null thì trả về 1
            return View(listProducts.ToPagedList(pageNumber, pageSize));
        }

        private string ConvertToUnSign(string input)
        {
            input = input.Trim();
            for (int i = 0x20; i < 0x30; i++)
            {
                input = input.Replace(((char)i).ToString(), " ");
            }
            Regex regex = new Regex(@"\p{IsCombiningDiacriticalMarks}+");
            string str = input.Normalize(NormalizationForm.FormD);
            string str2 = regex.Replace(str, string.Empty).Replace('đ', 'd').Replace('Đ', 'D');
            while (str2.IndexOf("?") >= 0)
            {
                str2 = str2.Remove(str2.IndexOf("?"), 1);
            }
            return str2;
        }
    }
}