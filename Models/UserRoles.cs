using System.Collections.Generic;
using System.Linq;

namespace Angular2.Sample.Forms.Models
{
    public class UserRoles
    {
        public UserRoles()
        {
            roles = AllRoles.Where(x => x.Id == RoleId);
        }
        public int Id { get; set; }
        public int RoleId { get; set; }
        public int PersonId { get; set; }
        public IEnumerable<Roles> roles { get; set; }

        public static List<Roles> AllRoles = new List<Roles> {
                new Roles{Id=1,Name="Manager",Description="All Rights, This includes the ability to edit project role membership, project components"},
                new Roles{Id=2,Name="Accountant",Description="View/Edit accounts"},
                new Roles{Id=3,Name="Customer",Description="View Users"}
            };
    }
}
