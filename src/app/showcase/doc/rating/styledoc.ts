import { Component, Input } from '@angular/core';

@Component({
    selector: 'style-doc',
    template: ` <section class="py-3">
        <app-docsectiontext [title]="title" [id]="id">
            <p>Following is the list of structural style classes, for theming classes visit <a href="#" [routerLink]="['/theming']">theming</a> page.</p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-rating</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-rating-star</td>
                        <td>Star element</td>
                    </tr>
                    <tr>
                        <td>p-rating-star-on</td>
                        <td>Selected star element.</td>
                    </tr>
                    <tr>
                        <td>p-rating-cancel</td>
                        <td>Cancel icon.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>`
})
export class StyleDoc {
    @Input() id: string;

    @Input() title: string;
}
