export interface Option {
    value: string;
    label: string;
  }
  
  export interface Field {
    id: string;
    type: string;
    label: string;
    required: boolean;
    placeholder?: string;
    options?: Option[];
    validation?: {
      pattern: string;
      message: string;
    };
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: Field[];
  }
  