-- Orbytes Global Solutions: TiDB Cloud Inquiries Schema
-- Run this SQL in your TiDB Cloud Web Console (SQL Editor)

CREATE TABLE IF NOT EXISTS inquiries (
    id VARCHAR(64) PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    work_email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    organization_name VARCHAR(255) NOT NULL,
    solution_area VARCHAR(100) NOT NULL,
    company_scale VARCHAR(100) NOT NULL,
    primary_challenge TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    ip_address VARCHAR(45),
    user_agent VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at),
    INDEX idx_email (work_email),
    INDEX idx_status (status)
);
