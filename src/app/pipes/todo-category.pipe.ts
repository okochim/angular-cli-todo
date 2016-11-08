import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'todo-category' })
export class TodoCategory implements PipeTransform {
  transform(value: number): number {
    let category;
        switch (value) {
            case 1:
                category = '仕事';
                break;
            case 2:
                category = 'プライベート';
                break;
            case 3:
                category = 'その他';
                break;
            default:
                category = '分類なし';
                break;
        }
        return category;    
  }
}