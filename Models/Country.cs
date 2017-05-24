using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2.Sample.Forms.Models
{
    public class Country
    {

        public int Id { get; set; }
        public string CountryCode { get; set; }
        public string name { get; set; }
    }
    public static class getCountry
    {
        public static List<Country> countryData = new List<Country>(){
            new Country{Id=1,name="Algeria",CountryCode="DZA"},
            new Country{Id=2,name="America",CountryCode="ASM"},
            new Country{Id=3,name="Andorra",CountryCode="AND"},
            new Country{Id=4,name="Angola",CountryCode="AGO"},
            new Country{Id=5,name="Anguilla",CountryCode="AIA"},
            new Country{Id=6,name="Antarctica",CountryCode="ATA"},
            new Country{Id=7,name="Antigua",CountryCode="ATG"},
            new Country{Id=8,name="Argentina",CountryCode="ARG"},
            new Country{Id=9,name="Armenia",CountryCode="ARM"},
            new Country{Id=10,name="Aruba",CountryCode="ABW"},
            new Country{Id=11,name="Australia",CountryCode="AUS"},
            new Country{Id=12,name="Austria",CountryCode="AUT"},
            new Country{Id=13,name="Azerbaijan ",CountryCode="AZE"},
            new Country{Id=14,name="Bahamas",CountryCode="BHS"},
            new Country{Id=15,name="Bahrain",CountryCode="BHR"},
            new Country{Id=16,name="Bangladesh",CountryCode="BGD"},
            new Country{Id=17,name="Barbados",CountryCode="BRB"},
            new Country{Id=18,name="Belarus",CountryCode="BLR"},
            new Country{Id=19,name="Belgium",CountryCode="BEL"},
            new Country{Id=20,name="Belize",CountryCode="BLZ"},
            new Country{Id=21,name="Benin",CountryCode="BEN"},
            new Country{Id=22,name="Bermuda",CountryCode="BMU"},
            new Country{Id=23,name="Bhutan",CountryCode="BTN"},
            new Country{Id=24,name="Bolivia",CountryCode="BOL"},
            new Country{Id=25,name="Bosnia",CountryCode="BIH"},
            new Country{Id=26,name="India",CountryCode="Ind"}
        };
    }
}
