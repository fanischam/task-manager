import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();

  imageUrl = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser() {}
}
