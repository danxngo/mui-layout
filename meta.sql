-- Create tables
CREATE TABLE IF NOT EXISTS public.landlords (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255),
    contact_number VARCHAR(20),
    email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS public.houses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    landlord_id UUID
        REFERENCES public.landlords(id)
        ON DELETE CASCADE,
    address VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS public.rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    house_id UUID
        REFERENCES public.houses(id)
        ON DELETE CASCADE,
    room_number INTEGER,
    rent_amount NUMERIC(10,2)
);

CREATE TABLE IF NOT EXISTS public.tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id UUID
        REFERENCES public.rooms(id)
        ON DELETE CASCADE,
    name VARCHAR(255),
    contact_number VARCHAR(20),
    email VARCHAR(255),
    entered_date DATE
);

CREATE TABLE IF NOT EXISTS public.expenses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    house_id UUID
        REFERENCES public.houses(id)
        ON DELETE CASCADE,
    expense_date TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    description TEXT,
    amount NUMERIC(10,2)
);

CREATE TABLE IF NOT EXISTS public.monthly_expenses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    house_id UUID
        REFERENCES public.houses(id)
        ON DELETE CASCADE,
    description TEXT,
    amount NUMERIC(10,2),
    due_day INTEGER,
    expense_date DATE,
    created_at DATE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.contracts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID
        REFERENCES public.tenants(id)
        ON DELETE CASCADE,
    start_date DATE,
    end_date DATE,
    terms_and_conditions TEXT
);

CREATE TABLE IF NOT EXISTS public.electricity (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id UUID
        REFERENCES public.rooms(id)
        ON DELETE CASCADE,
    token TEXT NOT NULL,
    checked BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS public.payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID
        REFERENCES public.tenants(id)
        ON DELETE CASCADE,
    payment_date TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    amount NUMERIC(10,2),
    payment_method VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS public.reminders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID
        REFERENCES public.tenants(id)
        ON DELETE CASCADE,
    reminder_date DATE NOT NULL,
    description TEXT NOT NULL,
    checked BOOLEAN DEFAULT FALSE
);


-- Sample data for landlords table
INSERT INTO public.landlords (name, contact_number, email) 
VALUES 
    ('John Doe', '+1234567890', 'john@example.com'),
    ('Jane Smith', '+1987654321', 'jane@example.com');

-- Sample data for houses table
INSERT INTO public.houses (landlord_id, address) 
VALUES 
    ((SELECT id FROM public.landlords WHERE name = 'John Doe'), '123 Main Street'),
    ((SELECT id FROM public.landlords WHERE name = 'Jane Smith'), '456 Elm Street');

-- Sample data for rooms table
INSERT INTO public.rooms (house_id, room_number, rent_amount) 
VALUES 
    ((SELECT id FROM public.houses WHERE address = '123 Main Street'), 101, 800.00),
    ((SELECT id FROM public.houses WHERE address = '123 Main Street'), 102, 750.00),
    ((SELECT id FROM public.houses WHERE address = '456 Elm Street'), 201, 900.00);

-- Sample data for tenants table
INSERT INTO public.tenants (room_id, name, contact_number, entered_date) 
VALUES 
    ((SELECT id FROM public.rooms WHERE room_number = 101), 'Alice Johnson', '+1122334455', '2023-01-15'),
    ((SELECT id FROM public.rooms WHERE room_number = 102), 'Bob Smith', '+1555666777', '2023-02-20'),
    ((SELECT id FROM public.rooms WHERE room_number = 201), 'Carol Williams', '+1888999000', '2023-03-10');

-- Sample data for expenses table
INSERT INTO public.expenses (house_id, description, amount) 
VALUES 
    ((SELECT id FROM public.houses WHERE address = '123 Main Street'), 'Repair costs', 500.00),
    ((SELECT id FROM public.houses WHERE address = '456 Elm Street'), 'Maintenance fee', 300.00);

-- Sample data for monthly_expenses table
INSERT INTO public.monthly_expenses (house_id, description, amount, due_day, expense_date) 
VALUES 
    ((SELECT id FROM public.houses WHERE address = '123 Main Street'), 'Utility bills', 200.00, 1, '2024-03-01'),
    ((SELECT id FROM public.houses WHERE address = '456 Elm Street'), 'Security service fee', 150.00, 5, '2024-03-05');

-- Sample data for contracts table
INSERT INTO public.contracts (tenant_id, start_date, end_date, terms_and_conditions) 
VALUES 
    ((SELECT id FROM public.tenants WHERE name = 'Alice Johnson'), '2023-01-15', '2023-12-31', '1-year lease agreement'),
    ((SELECT id FROM public.tenants WHERE name = 'Bob Smith'), '2023-02-20', '2023-12-31', '10-month lease agreement'),
    ((SELECT id FROM public.tenants WHERE name = 'Carol Williams'), '2023-03-10', '2023-12-31', '9-month lease agreement');

-- Sample data for electricity table
INSERT INTO public.electricity (room_id, token, checked) 
VALUES 
    ((SELECT id FROM public.rooms WHERE room_number = 101), 'ABC123', FALSE),
    ((SELECT id FROM public.rooms WHERE room_number = 102), 'DEF456', TRUE),
    ((SELECT id FROM public.rooms WHERE room_number = 201), 'GHI789', FALSE);

-- Sample data for payments table
INSERT INTO public.payments (tenant_id, amount, payment_method) 
VALUES 
    ((SELECT id FROM public.tenants WHERE name = 'Alice Johnson'), 800.00, 'Cash'),
    ((SELECT id FROM public.tenants WHERE name = 'Bob Smith'), 750.00, 'Bank transfer'),
    ((SELECT id FROM public.tenants WHERE name = 'Carol Williams'), 900.00, 'Credit card');

-- Sample data for reminders table
INSERT INTO public.reminders (tenant_id, reminder_date, description, checked) 
VALUES 
    ((SELECT id FROM public.tenants WHERE name = 'Alice Johnson'), '2024-03-15', 'Renew lease', FALSE),
    ((SELECT id FROM public.tenants WHERE name = 'Bob Smith'), '2024-03-20', 'Pay rent', FALSE),
    ((SELECT id FROM public.tenants WHERE name = 'Carol Williams'), '2024-03-25', 'Submit maintenance request', FALSE);
