using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2.Sample.Forms.Models
{
	public class CountryResponse
	{
        public CountryResponse()
        {
            country = new List<Country>();
        }
        public int count { get; set; }
        public List<Country> country { get; set; }
    }
}
