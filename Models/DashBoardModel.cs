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
        public int StdId { get; set; }
        public string FName { get; set; }
        public string MName { get; set; }
        public string LName { get; set; }
        public string FatName { get; set; }
        public string Dob { get; set; }
        public decimal Wt { get; set; }
        public decimal Ht { get; set; }
        public string BlGroup { get; set; }
        public string Gender { get; set; }
        public string MothLang { get; set; }
        public string OccupFat { get; set; }
        public string FatContact { get; set; }
        public string FatEmail { get; set; }
        public string Province { get; set; }
        public string City { get; set; }
        public string CurrAdd { get; set; }
        public string PermAdd { get; set; }
        public string StdEmail { get; set; }
        public string StdUsername { get; set; }
        public string StdContact { get; set; }

    }
}

    