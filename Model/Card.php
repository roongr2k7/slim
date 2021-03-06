<?php
App::uses('AppModel', 'Model');
/**
 * Card Model
 *
 * @property List $List
 */
class Card extends AppModel {
/**
 * Validation rules
 *
 * @var array
 */
	public $validate = array(
		'list_id' => array(
			'numeric' => array(
				'rule' => array('numeric'),
				//'message' => 'Your custom message here',
				//'allowEmpty' => false,
				//'required' => false,
				//'last' => false, // Stop validation after this rule
				//'on' => 'create', // Limit validation to 'create' or 'update' operations
			),
		),
	);

	//The Associations below have been created with all possible keys, those that are not needed can be removed

/**
 * belongsTo associations
 *
 * @var array
 */
	public $belongsTo = array(
		'List' => array(
			'className' => 'List',
			'foreignKey' => 'list_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		)
	);
}
