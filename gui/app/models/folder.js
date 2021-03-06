// Copyright 2016 Documize Inc. <legal@documize.com>. All rights reserved.
//
// This software (Documize Community Edition) is licensed under
// GNU AGPL v3 http://www.gnu.org/licenses/agpl-3.0.en.html
//
// You can operate outside the AGPL restrictions by purchasing
// Documize Enterprise Edition and obtaining a commercial license
// by contacting <sales@documize.com>.
//
// https://documize.com

import { computed } from '@ember/object';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import constants from '../utils/constants';
import stringUtil from '../utils/string';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	name: attr('string'),
	orgId: attr('string'),
	userId: attr('string'),
	folderType: attr('number', { defaultValue: 2 }),

	slug: computed('name', function () {
		return stringUtil.makeSlug(this.get('name'));
	}),

	markAsRestricted() {
		this.set('folderType', constants.FolderType.Protected);
	},

	markAsPrivate() {
		this.set('folderType', constants.FolderType.Private);
	},

	markAsPublic() {
		this.set('folderType', constants.FolderType.Public);
	},

	// client-side prop that holds who can see this folder
	sharedWith: attr(),
	created: attr(),
	revised: attr()
});
