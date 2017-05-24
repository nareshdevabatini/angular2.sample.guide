using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2.Sample.Forms.Models
{
    public class PersonRequest
    {
        public PersonRequest()
        {
            skipCount = 0;
            takeCount = 5;
            sortOrder = "FirstName";
        }
        public int Id { get; set; }
        public string keyword { get; set; }
        public int skipCount { get; set; }
        public int takeCount { get; set; }
        public string countryCode { get; set; }
        public string sortOrder { get; set; }
        public string orderBy { get; set; }
    }
    public class PersonRespone
    {
        public PersonRespone()
        {
            person = new List<Person>();
        }
        public int count { get; set; }
        public List<Person> person { get; set; }
    }
}
