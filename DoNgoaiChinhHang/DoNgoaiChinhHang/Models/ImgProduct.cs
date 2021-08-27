using DoNgoaiChinhHang.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DoNgoaiChinhHang.Models
{
    public class ImgProduct
    {
        public Product Product { get; set; }

        public string ImgFirst { get; set; }

        public ImgProduct(Product product, string img)
        {
            this.Product = product;
            this.ImgFirst = img;
        }
    }
}