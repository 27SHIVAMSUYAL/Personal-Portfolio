### **📩 Email Sending Flow (React + Node.js + SendGrid)**  

1️⃣ **User fills the form** → Enters **Name, Email, Subject, Message** → Clicks **Send**  

2️⃣ **Axios sends request** → `POST /api/email/SendEmail` with form data  

3️⃣ **CORS checks request** → If allowed, request moves to backend  

4️⃣ **Backend receives data** → Extracts & validates **name, email, subject, message**  

5️⃣ **Validation check** → If any field is **missing**, return **400 Bad Request**  

6️⃣ **Nodemailer formats email** → SendGrid API sends the email  

7️⃣ **Backend responds**  
   ✅ If sent → `{ success: true, message: "Email Sent" }`  
   ❌ If failed → `{ success: false, message: "Error occurred" }`  

8️⃣ **Frontend shows toast notification**  
   - ✅ Success → **"Email Sent ✅"**  
   - ❌ Failure → **"Failed to Send ❌"**  

---

### **Key Components:**
🔹 **Axios** → Sends HTTP request from React to Node.js  
🔹 **CORS** → Allows frontend to talk to backend  
🔹 **Nodemailer** → Handles email formatting  
🔹 **SendGrid** → Sends email to recipient  



To handle error of  
warning: in the working copy of 'backend/node_modules/babel-runtime/package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'backend/node_modules/babel-runtime/package.json', LF will be replaced by CRLF the next time Git touches it

just make .gitattributes 

* text=auto
