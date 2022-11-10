import { __decorate } from './node_modules/tslib/tslib.es6.js';
import './node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from './node_modules/lit-html/lit-html.js';
import { LitElement as s } from './node_modules/lit-element/lit-element.js';
import { property as e } from './node_modules/@lit/reactive-element/decorators/property.js';
import './node_modules/@lit/reactive-element/decorators/query-assigned-elements.js';

class OscdSave extends s {
    async run() {
        if (this.doc) {
            const blob = new Blob([new XMLSerializer().serializeToString(this.doc)], {
                type: 'application/xml',
            });
            const a = document.createElement('a');
            a.download = this.docName;
            a.href = URL.createObjectURL(blob);
            a.dataset.downloadurl = ['application/xml', a.download, a.href].join(':');
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => {
                URL.revokeObjectURL(a.href);
            }, 5000); // TODO(ca-d): discuss revoke timeout length
        }
    }
    render() {
        return y `<button @click=${() => this.run()}>Save project</button>`;
    }
}
__decorate([
    e()
], OscdSave.prototype, "doc", void 0);
__decorate([
    e()
], OscdSave.prototype, "docName", void 0);

export { OscdSave as default };
//# sourceMappingURL=oscd-save.js.map
