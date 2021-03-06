module.exports = [
  {
    "roles": ["posting", "active", "owner"],
    "operation": "vote",
    "params": [
      "voter",
      "author",
      "permlink",
      "weight"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "comment",
    "params": [
      "parent_author",
      "parent_permlink",
      "author",
      "permlink",
      "title",
      "body",
      "json_metadata"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transfer",
    "params": [
      "from",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transfer_to_vesting",
    "params": [
      "from",
      "to",
      "amount"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "withdraw_vesting",
    "params": [
      "account",
      "vesting_shares"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "price",
    "params": [
      "base",
      "quote"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_create",
    "params": [
      "fee",
      "creator",
      "new_account_name",
      "owner",
      "active",
      "posting",
      "memo_key",
      "json_metadata"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_update",
    "params": [
      "account",
      "owner",
      "active",
      "posting",
      "memo_key",
      "json_metadata",
      "posting_json_metadata",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "witness_update",
    "params": [
      "owner",
      "url",
      "block_signing_key",
      "props",
      "fee"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_witness_vote",
    "params": [
      "account",
      "witness",
      "approve"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_witness_proxy",
    "params": [
      "account",
      "proxy"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "custom",
    "params": [
      "required_auths",
      "id",
      "data"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "delete_comment",
    "params": [
      "author",
      "permlink"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "custom_json",
    "params": [
      "required_auths",
      "required_posting_auths",
      "id",
      "json"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "comment_options",
    "params": [
      "author",
      "permlink",
      "max_accepted_payout",
      "allow_votes",
      "allow_curation_rewards",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "set_withdraw_vesting_route",
    "params": [
      "from_account",
      "to_account",
      "percent",
      "auto_vest"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "claim_account",
    "params": [
      "creator",
      "fee",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "create_claimed_account",
    "params": [
      "creator",
      "new_account_name",
      "owner",
      "active",
      "posting",
      "memo_key",
      "json_metadata",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "request_account_recovery",
    "params": [
      "recovery_account",
      "account_to_recover",
      "new_owner_authority",
      "extensions"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "recover_account",
    "params": [
      "account_to_recover",
      "new_owner_authority",
      "recent_owner_authority",
      "extensions"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "change_recovery_account",
    "params": [
      "account_to_recover",
      "new_recovery_account",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_transfer",
    "params": [
      "from",
      "to",
      "agent",
      "escrow_id",
      "blurt_amount",
      "fee",
      "ratification_deadline",
      "escrow_expiration",
      "json_meta"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_dispute",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "escrow_id"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_release",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "receiver",
      "escrow_id",
      "blurt_amount"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_approve",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "escrow_id",
      "approve"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transfer_to_savings",
    "params": [
      "from",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transfer_from_savings",
    "params": [
      "from",
      "request_id",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "cancel_transfer_from_savings",
    "params": [
      "from",
      "request_id"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "custom_binary",
    "params": [
      "id",
      "data"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "decline_voting_rights",
    "params": [
      "account",
      "decline"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "reset_account",
    "params": [
      "reset_account",
      "account_to_reset",
      "new_owner_authority"
    ]
  },
  {
    "roles": ["owner", "posting"],
    "operation": "set_reset_account",
    "params": [
      "account",
      "current_reset_account",
      "reset_account"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "claim_reward_balance",
    "params": [
      "account",
      "reward_blurt",
      "reward_vests"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "delegate_vesting_shares",
    "params": [
      "delegator",
      "delegatee",
      "vesting_shares"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "witness_set_properties",
    "params": [
      "owner",
      "props",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "create_proposal",
    "params": [
      "creator",
      "receiver",
      "start_date",
      "end_date",
      "daily_pay",
      "subject",
      "permlink",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "update_proposal_votes",
    "params": [
      "voter",
      "proposal_ids",
      "approve",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "remove_proposal",
    "params": [
      "proposal_owner",
      "proposal_ids",
      "extensions"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "comment_reward",
    "params": [
      "author",
      "permlink",
      "payout"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "fill_vesting_withdraw",
    "params": [
      "from_account",
      "to_account",
      "withdrawn",
      "deposited"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "fill_transfer_from_savings",
    "params": [
      "from",
      "to",
      "amount",
      "request_id",
      "memo"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "account_update2",
    "params": [
      "account",
      "owner",
      "active",
      "posting",
      "memo_key",
      "json_metadata",
      "posting_json_metadata",
      "extensions"
    ]
  }
];
