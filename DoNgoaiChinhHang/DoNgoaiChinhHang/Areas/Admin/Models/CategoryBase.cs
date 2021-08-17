namespace DoNgoaiChinhHang.Areas.Admin.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CategoryBase")]
    public partial class CategoryBase
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CategoryBase()
        {
            Categories = new HashSet<Category>();
        }

        [StringLength(10)]
        public string CategoryBaseID { get; set; }

        [StringLength(50)]
        public string CategoryBaseName { get; set; }

        [StringLength(4000)]
        public string Description { get; set; }

        public string Images { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Category> Categories { get; set; }
    }
}
