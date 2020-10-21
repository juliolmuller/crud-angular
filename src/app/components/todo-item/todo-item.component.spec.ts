import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { TodoItemComponent } from './todo-item.component'

describe('TodoItemComponent', () => {
  let component: TodoItemComponent
  let fixture: ComponentFixture<TodoItemComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
