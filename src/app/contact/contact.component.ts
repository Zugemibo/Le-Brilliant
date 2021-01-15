import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.FormData = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.FormData.status == "VALID" && this.honeypot.value == "") {
      this.FormData.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.FormData.get("name").value);
      formData.append("email", this.FormData.get("email").value);
      formData.append("message", this.FormData.get("message").value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post("https://www.appsheet.com/start/6480f7eb-f4ea-48d0-a731-be1b958172b0", formData).subscribe(
        (response) => {
          // choose the response message
          if (response["result"] == "success") {
            this.responseMessage = "Dziękujemy za wiadomość, odpiszemy najszybciej jak się tylko da.";
          } else {
            this.responseMessage = "Coś poszło nie tak :(";
          }
          this.FormData.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Coś poszło nie tak :(";
          this.FormData.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }
}