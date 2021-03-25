import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  DoCheck,
  NgModule,
  OnInit
} from "@angular/core";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <h1>Counter Value: {{ counter }}</h1>
      <input type="button" (click)="updateCounter()" value="Update Counter" />
      <child-component></child-component>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  counter = 0;
  test = "";

  updateCounter() {
    this.counter += 1;
    console.log("counter", this.counter);
  }
}

@Component({
  selector: "child-component",
  template: `
    <div>
      <h2>{{ executeFunction() }}</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent implements AfterViewChecked, DoCheck, OnInit {
  ngOnInit() {
    console.log("onInit");
  }

  ngDoCheck(): void {
    console.log("doCheck");
  }
  ngAfterViewChecked(): void {
    console.log("afterViewChecked");
  }
  executeFunction() {
    console.log("App Rerendered2");
    return "This is Child Component";
  }
}

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
