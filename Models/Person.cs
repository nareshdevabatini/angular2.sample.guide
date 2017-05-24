using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2.Sample.Forms.Models
{
    public class Person
    {
        public Person()
        {
            userRoles = AllUserRoles.Where(x => x.PersonId == Id);
        }
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public int MobileNo { get; set; }
        public string CountryCode { get; set; }
        public string StateCode { get; set; }
        public string CityCode { get; set; }
        public DateTime DOB { get; set; }
        public IEnumerable<UserRoles> userRoles { get; set; }

        public static List<UserRoles> AllUserRoles = new List<UserRoles>()
            {
                new UserRoles{Id=1,RoleId=1,PersonId=1},new UserRoles{Id=1,RoleId=2,PersonId=1},
                new UserRoles{Id=1,RoleId=3,PersonId=1},new UserRoles{Id=1,RoleId=2,PersonId=2},
                new UserRoles{Id=1,RoleId=2,PersonId=3},new UserRoles{Id=1,RoleId=3,PersonId=4},
                new UserRoles{Id=1,RoleId=1,PersonId=5},new UserRoles{Id=1,RoleId=3,PersonId=6},
                new UserRoles{Id=1,RoleId=3,PersonId=7},new UserRoles{Id=1,RoleId=3,PersonId=8},
                new UserRoles{Id=1,RoleId=3,PersonId=9},new UserRoles{Id=1,RoleId=3,PersonId=10},
                new UserRoles{Id=1,RoleId=2,PersonId=11},new UserRoles{Id=1,RoleId=2,PersonId=12},
                new UserRoles{Id=1,RoleId=2,PersonId=13},new UserRoles{Id=1,RoleId=2,PersonId=14},
                new UserRoles{Id=1,RoleId=2,PersonId=15},new UserRoles{Id=1,RoleId=2,PersonId=16},
                new UserRoles{Id=1,RoleId=3,PersonId=17},new UserRoles{Id=1,RoleId=2,PersonId=18},
                new UserRoles{Id=1,RoleId=2,PersonId=19},new UserRoles{Id=1,RoleId=2,PersonId=20},
                new UserRoles{Id=1,RoleId=3,PersonId=21},
            };
    }
}
