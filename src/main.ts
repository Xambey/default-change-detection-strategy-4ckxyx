import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import { ChangeDetectionStrategy, NgModule } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div>
      <h1>Counter Value: {{ this.counter }}</h1>
      <input
        type="button"
        (click)="this.updateCounter()"
        value="Update Counter"
      />
      <child-component></child-component>
    </div>
  `
})
export class AppComponent {
  counter = 0;

  updateCounter() {
    this.counter += 1;
  }
}

@Component({
  selector: "child-component",
  template: `
    <div>
      <h2>{{ this.executeFunction() }}</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  executeFunction() {
    console.log("App Rerendered");
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
