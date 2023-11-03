import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUiComponent } from './client-ui.component';

describe('ClientUiComponent', () => {
  let component: ClientUiComponent;
  let fixture: ComponentFixture<ClientUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientUiComponent]
    });
    fixture = TestBed.createComponent(ClientUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
