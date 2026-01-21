# Database Fundamentals – Conceptual Understanding

## 1. Why is `db.json` not suitable as a database for real projects?

`db.json` is a simple file-based storage used for testing or small prototypes. It is **not suitable for real projects** because:

- **Performance issues**: Reading and writing to a file for every request is slow compared to an actual database.
- **Concurrency problems**: Multiple users trying to access or modify the file simultaneously can cause data corruption.
- **Scalability limitations**: File-based storage cannot handle large volumes of data efficiently.
- **Reliability issues**: If the file gets corrupted or deleted, all stored data is lost. There’s no built-in backup or recovery mechanism.

---

## 2. Ideal characteristics of a database system

A good database system should have the following characteristics:

- **Performance**: Fast read/write operations even with large datasets.
- **Concurrency**: Supports multiple users accessing and modifying data simultaneously without conflicts.
- **Reliability**: Ensures data is available and consistent, even in case of system crashes.
- **Data integrity**: Enforces rules to keep data accurate and consistent (e.g., constraints, validations, transactions).
- **Scalability**: Can handle increasing data volume or user load by scaling vertically (better hardware) or horizontally (distributed systems).
- **Fault tolerance**: Can recover gracefully from hardware or software failures, often using replication or backups.

---

## 3. Types of databases and their use cases

### Relational Databases (RDBMS)

- **Description**: Store data in structured tables with rows and columns; use SQL for queries.
- **Use cases**: Ideal for applications requiring **structured data and relationships**.
- **Examples**: MySQL, PostgreSQL, Oracle, SQL Server
- **Real-world applications**: Banking systems, e-commerce platforms, payroll systems, inventory management.

### Non-Relational Databases (NoSQL)

- **Description**: Store data in flexible formats like key-value pairs, documents, graphs, or wide-column stores.
- **Use cases**: Ideal for **unstructured or semi-structured data**, high scalability, and real-time applications.
- **Examples**: MongoDB, Cassandra, Redis, Firebase
- **Real-world applications**: Social media apps, real-time analytics, IoT systems, content management systems.

---

*Submitted by: Raparthy Srivani*  
*Date: 2026-01-21*
