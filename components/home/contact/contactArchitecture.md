# Contact Form Architecture (MVP)

## Recommended Stack

* **Frontend Form:** React + Next.js
* **Validation:** Zod
* **Submission Handling:** Next.js Server Actions
* **Email Delivery:** Resend
* **Form State:** useActionState

---

## High-Level Flow

```txt
User fills contact form
        ↓
ContactForm.tsx
(client component)
        ↓
useActionState()
        ↓
submitContactForm()
(Server Action)
        ↓
Zod Validation
        ↓
Valid? ───────────── No
  ↓                  ↓
Yes              Return field errors
  ↓                  ↓
Resend API       Display validation errors
  ↓
Send enquiry email
  ↓
Return success response
  ↓
Display success state
```

---

## File Structure

```txt
app/
  actions/
    contact.ts

components/
  contact/
    ContactForm.tsx

lib/
  validation/
    contact.ts

types/
  index.ts
```

---

## Responsibilities

### ContactForm.tsx

Responsible for:

* Rendering form fields
* Displaying validation errors
* Showing loading state
* Showing success state
* Submitting form data

### contact.ts (Server Action)

Responsible for:

* Receiving form data
* Running validation
* Calling Resend
* Returning success/error responses

### validation/contact.ts

Responsible for:

* Zod schema definition
* Field validation rules
* Type inference

---

## Validation Rules

### Name

* Required
* Minimum 2 characters

### Email

* Required
* Valid email format

### Company

* Optional

### Message

* Required
* Minimum 20 characters

---

## User States

### Initial

```txt
Name
Email
Company
Message

[Send Message]
```

### Loading

```txt
Sending...
```

### Validation Error

```txt
Please enter a valid email address.
```

### Submission Error

```txt
Something went wrong.
Please try again.
```

### Success

```txt
Thanks for reaching out.

We've received your enquiry and will get back to you shortly.
```

---

## Why This Approach

### Advantages

* No dedicated backend required
* Works naturally with App Router
* Strong validation
* Production-ready lead capture
* Easy migration to Sanity later
* Minimal code surface area
* Reliable email delivery through Resend

### Future Enhancements

* Spam protection (Turnstile/hCaptcha)
* CRM integration
* HubSpot integration
* Newsletter opt-in
* Analytics event tracking
* File uploads
* Auto-response emails
