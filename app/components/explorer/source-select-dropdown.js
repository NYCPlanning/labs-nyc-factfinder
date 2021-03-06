import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

/**
  * @param { fn(Source POJO) } setSource - (Required) Ember Action function that accepts a Source POJO. It will
  * set the selected Explorer source to the passed Source.
  * @param { [] } sources - array of Source objects
*/
export default class SourceSelectDropdownComponent extends Component {
  @tracked open = false;

  @action toggleOpen() {
    this.open = !this.open;
  }

  get source() {
    return this.args.sources.find(source => source.selected);
  }

  get censusSources() {
    return this.args.sources.filter(source => source.type === 'census');
  }

  get acsSources() {
    return this.args.sources.filter(source => source.type === 'acs');
  }
}
