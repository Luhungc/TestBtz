const kanjut = `�￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼��￼�￼�￼�￼�￼�￼�￼�￼�?

👆 CÓPIA ISSO VÁRIAS VEZES PRA SUA TRAVA DOC FICAR MAIS PESADA👆
`;
exports.kanjut = kanjut;
