using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DoNgoaiChinhHang.Areas.Admin.Models
{
    public class FileUp
    {
        public HttpPostedFileBase[] files { get; set; }
    }
}