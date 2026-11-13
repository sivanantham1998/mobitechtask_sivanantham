import db from "../config/db.js"

export const getAllCategory = async () => {
    const sql = "SELECT * FROM categories";
    // const no_of_prod="SELECT category_id,COUNT(*) FROM produts GROUP BY category_id;"
    const results = await db.query(sql);

    return results;
}

export const removeProducts = async () => {
    const sql = "DELETE c FROM categories c LEFT JOIN produts p ON c.id = p.category_id WHERE p.id IS null";
    const result = await db.query(sql)
    return result;
}

export const getCutomerdetails = async () => {
    const sql = "SELECT c.id,c.name,COUNT(p.id) FROM customer c LEFT JOIN orders p ON c.id=p.customer_id GROUP BY c.id,c.name";
    const result = await db.query(sql)
    return result;
}

export const searchByName = async (name) => {
    const sql = "select * from customer where name=?";
    const result = await db.query(sql, [name]);
    return result;
}

export const getbyCustomer = async (id) => {
    const sql = "SELECT * FROM orders WHERE customer_id=?";
    const result = await db.query(sql, [id]);
    return result;
}

export const pendingPastWeek = async () => {
    const sql = "SELECT * FROM orders WHERE STATUS='pending' AND DATE_ADD(NOW(),INTERVAL -7 DAY)";
    const result = await db.query(sql)
    return result;
}

export const lastMonthorders = async () => {
    const sql = "SELECT id,customer_id,COUNT(id) AS b FROM orders GROUP BY customer_id HAVING COUNT(id)>0 AND DATE_ADD(NOW(),INTERVAL -30 day)";
    const result = await db.query(sql);
    return result;
}

export const cancelOrder = async (id) => {
    const sql = `UPDATE orders SET STATUS="cancelled" WHERE id=?`
    const result = await db.query(sql)
    return result;
}
export const specificDataRange = async (fdate, edate) => {
    const sql = `SELECT * FROM orders WHERE created_at BETWEEN ${fdate} and ${edate}`
    const result = await db.query(sql);
    return result;
}