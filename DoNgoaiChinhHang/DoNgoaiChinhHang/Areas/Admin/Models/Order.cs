namespace DoNgoaiChinhHang.Areas.Admin.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Order")]
    public partial class Order
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Order()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        [StringLength(10)]
        public string OrderID { get; set; }

        [Required]
        [StringLength(10)]
        public string AccountID { get; set; }

        public bool? Note { get; set; }

        public DateTime? DateOrder { get; set; }

        public bool? PaymentType { get; set; }

        public float? Sum { get; set; }

        public bool? Status { get; set; }

        public float? Discount { get; set; }

        public virtual Account Account { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
