ALTER TABLE civic_duty_user ALTER COLUMN password TYPE TEXT;
ALTER TABLE civic_duty_user ALTER COLUMN phone_number TYPE TEXT;
ALTER TABLE civic_duty_user ADD COLUMN salt TEXT;
