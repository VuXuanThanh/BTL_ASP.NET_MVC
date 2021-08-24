using DoNgoaiChinhHang.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DoNgoaiChinhHang.Models
{
    public class CartItem
    {
        public int Quanlity { get; set; }
        public Product Product { get; set; }
    }
}