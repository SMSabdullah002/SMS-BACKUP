using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using kanban.Models.Catagory;


namespace kanban.Models
{
    public class Root
    {
        [Required]
        public int StdId { get; set; }
        [Required]
        public string FName { get; set; }
        [Required]
        public string MName { get; set; }
        [Required]
        public string LName { get; set; }
        [Required]
        public string FatName { get; set; }
        [Required]
        public string Dob { get; set; }
        [Required]
        public decimal Wt { get; set; }
        [Required]
        public decimal Ht { get; set; }
        [Required]
        public string BlGroup { get; set; }
        [Required]

        public string Gender { get; set; }
        [Required]
        public string MothLang { get; set; }
        [Required]
        public string OccupFat { get; set; }
        [Required]
        public string FatContact { get; set; }
        [Required]
        public string FatEmail { get; set; }
        [Required]
        public string Province { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string CurrAdd { get; set; }
        [Required]
        public string PermAdd { get; set; }
        [Required]
        public string StdEmail { get; set; }
        [Required]
        public string StdUsername { get; set; }
        [Required]
        public string StdContact { get; set; }

    }
}

    