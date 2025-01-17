import React, { useState } from 'react';
import DynamicForm from './components/DynamicForm';
import { FormSchema } from './types';

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<FormSchema>({
    formTitle: "Project Requirements Survey",
    formDescription: "Please fill out this survey about your project needs",
    fields: [
      {
        "id": "name",
        "type": "text",
        "label": "Full Name",
        "required": true,
        "placeholder": "Enter your full name"
      },
      {
        "id": "email",
        "type": "email",
        "label": "Email Address",
        "required": true,
        "placeholder": "you@example.com",
        "validation": {
          "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
          "message": "Please enter a valid email address"
        }
      },
      {
        "id": "companySize",

        "type": "select",
  
        "label": "Company Size",
  
        "required": true,
  
 "options":[
  { "value": "1-50", "label": "1-50 employees" },

  { "value": "51-200", "label": "51-200 employees" },

  { "value": "201-1000", "label": "201-1000 employees" },
  { "value": "1000+", "label": "1000+ employees" }


      ]

      },{
        "id": "industry",

        "type": "radio",
  
        "label": "Industry",
  
        "required": true,
  
        "options": [

        { "value": "tech", "label": "Technology" },

        { "value": "healthcare", "label": "Healthcare" },

        { "value": "finance", "label": "Finance" },

        { "value": "retail", "label": "Retail" },

        { "value": "other", "label": "Other" }

      ]

      },
      {
        "id": "timeline",

        "type": "select",
  
        "label": "Project Timeline",
  
        "required": true,
  
        "options": [
  
          { "value": "immediate", "label": "Immediate (within 1 month)" },
  
          { "value": "short", "label": "Short-term (1-3 months)" },
  
          { "value": "medium", "label": "Medium-term (3-6 months)" },
  
          { "value": "long", "label": "Long-term (6+ months)" }
  
        ]
  

      },{
        "id": "comments",

        "type": "textarea",
  
        "label": "Additional Comments",
  
        "required": false,
  
        "placeholder": "Any other details you'd like to share..."
  
      }
      
    ]
  });

  const handleJsonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const newSchema = JSON.parse(event.target.value);
      setJsonSchema(newSchema);
    } catch (e) {
      console.error("Invalid JSON:", e);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <textarea
          value={JSON.stringify(jsonSchema, null, 2)}
          onChange={handleJsonChange}
          className="w-full h-96 p-4 border rounded-md"
        />
      </div>

      <div className="dynamic">
        <DynamicForm schema={jsonSchema} />
      </div>
    </div>
  );
};

export default App;
