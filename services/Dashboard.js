const db = require("../configuration/database");

class DashboardService {
  static async getDashboards(userId) {
    try {
      const dashboards = await db
        .get()
        .collection("Dashboard")
        .find({ users: userId });
      return dashboards;
    } catch (e) {
      console.error(
        "[DashboardService@getDashboards] " +
          "An error occured when collecting user dashboards"
      );
      console.error(e);
    }
  }
}

module.exports = DashboardService;
